import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { sportsApi } from "../api/Api";
import Card from "../components/Card";

interface ITeam {
  strTeam: string;
  strTeamBadge: string;
  idTeam: string;
}

export interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
  const auth = getAuth();
  const user = auth.currentUser;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sportsData, setSportsData] = useState<{ teams: ITeam[] }>({
    teams: [],
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchSportsData = async () => {
      const data = await sportsApi();
      setSportsData(data);
      setIsLoading(false);
    };

    fetchSportsData();
  }, []);

  const handleCardClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < sportsData.teams.length - 1 ? prevIndex + 1 : 0
    );
  };
  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <Card
          key={sportsData.teams[currentIndex].idTeam}
          image={sportsData.teams[currentIndex].strTeamBadge}
          name={sportsData.teams[currentIndex].strTeam}
          onClick={handleCardClick}
        />
      )}
    </div>
  );
};

export default HomePage;
