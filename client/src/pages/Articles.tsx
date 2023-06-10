import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";

interface Article {
  id: string;
  title: string;
  videoUrl: string;
  content: string;
};

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  max-width: 1300px;
  gap: 32px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;


const Card = styled.div`
  min-height: 100%;
  box-shadow: 0.1rem 0.1rem 1rem rgba(0, 0, 0, 0.2);
  padding: 2rem;
  border-radius: 4rem;
`;

const Image = styled.img`
width: 100%;
height: 30rem;
border-radius: 2rem;
`;

const Header = styled.h2`
  margin-top: 1rem;
  font-size: 1.5rem;
`;

const NoArticlesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20rem 0;
  flex-direction: column;
  & a {
    font-size: 2rem;
    text-decoration: none;
  }
`;

const ErrorHeader = styled.h2`
  font-size: 3rem;
`;

const Content = styled.p`
`;

const VideoEmbed = styled.iframe`
  width: 100%;
  aspect-ratio: 16/9;
  height: auto;
`;

const Articles = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    const { data: response } = await axios.get(
      `${process.env.REACT_APP_API_BASE_URL}/articles`
    );
    setArticles(response);
  };

  return (
    <Container>
      {articles.length ? (
        <CardsContainer>
          {articles.map((article) => (
            <Card key={article.id}>
            {/* <Image src={article.imageUrl}/> */}
            <VideoEmbed width="450" height="315" src={article.videoUrl} title="YouTube video player" allow="title=0 byline=0 portrait=0 speed=0 badge=0 autopause=0 player_id=0 app_id=58479 queryparamtitle=0" allowFullScreen />
            {/* <iframe width="450" height="315" src="https://www.youtube.com/embed/CRVHDeaRYqM" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> */}
              <Header>{article.title}</Header>
              <Content>{article.content}</Content>
            </Card>
          ))}
        </CardsContainer>
      ) : (
        <NoArticlesContainer>
          <ErrorHeader>You don't have access yet</ErrorHeader>
          <Link to="/article-plans">Buy a plan</Link>
        </NoArticlesContainer>
      )}
    </Container>
  );
};

export default Articles;


