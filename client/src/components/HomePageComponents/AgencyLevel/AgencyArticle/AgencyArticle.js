import React from 'react';
import { Link } from 'react-router-dom';
import classes from './AgencyArticle.module.sass';

const AgencyArticle = ({ article }) => {
  return (
    <li className={classes.agencyListItem}>
      <article className={classes.agencyArticle}>
        <div
          className={classes.imgContainer}
          style={{
            color: article.color,
            background: article.background,
          }}
        >
          <i className={article.iconClasses}></i>
        </div>
        <h3 className={classes.agencyHeading}>{article.title}</h3>
        <p className={classes.agencyText}>
          {`${article.text} `}
          <Link to={article.linkAddress} className={classes.agencyLink}>
            Learn More
          </Link>
        </p>
      </article>
    </li>
  );
};

export default AgencyArticle;
