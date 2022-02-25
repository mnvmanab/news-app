import React, { Component } from 'react';

export class NewsItem extends Component {
  render() {
    //props
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div className="my-3">
        <div className="card">
          {/* if there is no image then */}
          <img
            src={
              imageUrl
                ? imageUrl
                : 'https://sp-ao.shortpixel.ai/client/q_glossy,ret_img,w_640/https://s22908.pcdn.co/wp-content/uploads/2019/10/private-photos-social-media.jpg'
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
