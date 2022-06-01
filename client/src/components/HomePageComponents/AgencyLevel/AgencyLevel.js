import React from 'react';
import AgencyArticle from './AgencyArticle/AgencyArticle';
import classes from './AgencyLevel.module.sass';
import articles from './articles.json';

const AgencyLevel = props => {
  return (
    <section className={classes.agencySection}>
      <div className={classes.container}>
        <h2>Agency Level Experience</h2>
        <ul className={classes.agencyList}>
          {articles.map(article => (
            <AgencyArticle article={article} key={article.title} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AgencyLevel;
