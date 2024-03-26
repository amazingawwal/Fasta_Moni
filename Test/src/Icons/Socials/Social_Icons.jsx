import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';



function Social_Icons() {
  return (
    <div>
      <a href="https://www.instagram.com/your_instagram_username" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon className='social_icon' icon={faInstagram} size="1x" />
      </a>
      <a href="https://www.linkedin.com/in/your_linkedin_username" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon className='social_icon' icon={faLinkedin} size="1x" />
      </a>
      <a href="https://twitter.com/your_twitter_username" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon className='social_icon' icon={faTwitter} size="1x" />
      </a>
      <a href="https://www.facebook.com/your_facebook_page" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon className='social_icon' icon={faFacebook} size="1x" />
      </a>
    </div>
  );
}

export default Social_Icons;
