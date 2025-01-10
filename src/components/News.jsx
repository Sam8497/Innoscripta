import React from 'react';
import { header, capitaLize } from "../config/config";
import { NewsCard } from "./index";
import NoDataFound from "./NoDataFound";

const News = () => {
  return (
    <div>
      <>
      {status === "loading" ? (
        <p>loading...</p>
      ) : personalized && articles.length < 1 ? (
        <>
          <div onClick={openOptions}>
            <span>
              Click here or above Button to select options for Personalized News
            </span>
          </div>
        </>
      ) : (
        <div>
          <div>{header(capitaLize(heading))}</div>
          {articles?.length < 1 ? (
            <NoDataFound />
          ) : (
            <div>
              <div>
                {articles.map((element, index) => {
                  return (
                    <div key={index}>
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
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}
    </>
    </div>
  )
}

export default News
