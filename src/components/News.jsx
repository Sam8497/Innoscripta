import { useSelector } from "react-redux";
import { Col, Row } from "react-bootstrap";
import { header, capitaLize } from "../config/config";
import { NewsCard } from "./index";
import Loading from "./Loading";
import "../App.css";
import styled from "styled-components";
import NoDataFound from "./NoDataFound";

function News({ personalized, handleShowSidebar }) {
  const personalizedClass = personalized ? "personalized" : "";

  let { articles, status, filters } = useSelector((state) => state.articles);
  articles = personalized ? personalized : articles;

  const heading = personalized
    ? "personalized"
    : filters.query
    ? filters.query
    : filters.category;

  const openOptions = () => {
    handleShowSidebar();
  };

  const Header = styled.h1`
    text-align: center;
    margin-top: 120px;
    color: #fff;
    margin-bottom: 20px;
    @media screen and (max-width: 425px) {
      font-size: 30px;
    }
  `;

  const Container = styled.div`
    width: 93%;
    padding-right: (1.5rem, 0.75rem);
    padding-left: (1.5rem, 0.75rem);
    margin-right: auto;
    margin-left: auto;
  `;

  const card = {
    marginTop: "10px",
    marginBottom: "50px",
  };

  return (
    <>
      {status === "loading" ? (
        <Loading />
      ) : personalized && articles.length < 1 ? (
        <>
          <div className="notify-container" onClick={openOptions}>
            <span className="">
              Click here or above Button to select options for Personalized News
            </span>
          </div>
        </>
      ) : (
        <div className={personalizedClass}>
          <Header>{header(capitaLize(heading))}</Header>
          {articles?.length < 1 ? (
            <NoDataFound />
          ) : (
            <Container>
              <Row>
                {articles.map((element, index) => {
                  return (
                    <Col
                      sm={12}
                      md={6}
                      lg={4}
                      xl={3}
                      style={
                        element.title === "[Removed]"
                          ? { display: "none" }
                          : card
                      }
                      key={index}
                    >
                      <NewsCard
                        title={element.title}
                        description={element.description}
                        published={element.publishedAt}
                        channel={element.source}
                        alt="News image"
                        publishedAt={element.publishedAt}
                        imageUrl={element.imgSrc}
                        urlNews={element.url}
                        author={element.author}
                      />
                    </Col>
                  );
                })}
              </Row>
            </Container>
          )}
        </div>
      )}
    </>
  );
}

export default News;
