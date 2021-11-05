import React, { useContext } from 'react';
import { ExtendUpdateContext } from './Main.jsx';

export default function Description() {
  const { product } = useContext(ExtendUpdateContext);

  return (
    <div className="overview-information overview-flex">
      <div className="overview-description">
        <div className="overview-slogan">{product.slogan}</div>
        <div className="overview-description-text">{product.description}</div>
      </div>
      <div className="overview-features">
        {product.features
          ? product.features.map((item, index) => (
            <div key={index}>
              &#x2713;
              {item.feature}
              {' '}
              -
              {' '}
              {item.value}
            </div>
          ))
          : <div>empty</div>}
        <div className="overview-flex">
          {/* <div className="btn-o" data-scribe="component:button" style="width: 221px;">
          <a href="https://twitter.com/intent/tweet?hashtags=ProjectCatwalkfortheWin%2C&amp;original_referer=https%3A%2F%2Fpublish.twitter.com%2F&amp;ref_src=twsrc%5Etfw%7Ctwcamp%5Ebuttonembed%7Ctwterm%5Ehashtag%7Ctwgr%5EProjectCatwalkfortheWin" className="btn" id="b">
            <i />
            <span className="label" id="l">
              Tweet
              <b>#ProjectCatwalkfortheWin</b>
            </span>
          </a>
        </div> */}
          <a href="https://twitter.com/intent/tweet?button_hashtag=ProjectCatwalkfortheWin&ref_src=twsrc%5Etfw" className="twitter-hashtag-button" data-show-count="false">Tweet</a>
          <script async src="https://platform.twitter.com/widgets.js" charset="utf-8" />
          <div className="fb-share-button" data-href="https://developers.facebook.com/docs/plugins/" data-layout="button_count" data-size="small"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse" className="fb-xfbml-parse-ignore" rel="noreferrer">Facebook</a></div>
          <a data-pin-do="buttonPin" data-pin-tall="true" data-pin-round="true" href="https://www.pinterest.com/pin/create/button/?url=https%3A%2F%2Fwww.flickr.com%2Fphotos%2Fkentbrew%2F6851755809%2F&media=https%3A%2F%2Ffarm8.staticflickr.com%2F7027%2F6851755809_df5b2051c9_z.jpg&description=Next%20stop%3A%20Pinterest"><img src="//assets.pinterest.com/images/pidgets/pinit_fg_en_round_red_32.png" /></a>
        </div>
      </div>
    </div>
  );
}
