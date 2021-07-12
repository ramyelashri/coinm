import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import useGithubStore from '../../store/githubStore';
import Link from '@material-ui/core/Link';
import Tooltip from '@material-ui/core/Tooltip';
import TurnedInIcon from '@material-ui/icons/TurnedIn';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import DeviceHubIcon from '@material-ui/icons/DeviceHub';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import './style.scss';

export default function HomePage() {

  const [activePanel, setActivePanel] = React.useState('repositories');

  const [
    repositories,
    getRepositories,
    developers,
    getDevelopers
  ] = useGithubStore(state => [
    state.repositories,
    state.getRepositories,
    state.developers,
    state.getDevelopers
  ])

  React.useEffect(() => {
    getRepositories();
    getDevelopers();
  }, [])

  const preventDefault = (event) => event.preventDefault();

  return (
    <>
      {activePanel === 'repositories' &&
      <>
        <div className="Global__meta">
          <h1>Trending</h1>
          <h3>See what the Github community is most excited about today.</h3>
        </div>

        <div className="HomePage__divider"></div>

        <div className="HomePage__container">
          <div className="HomePage__container-head">
            <div>
              <ButtonGroup variant="contained" color="primary" aria-label="Select repositores or developers">
                <Button className={activePanel === 'repositories' ? "" : "Global__button-black"}
                        onClick={() => setActivePanel('repositories')}>
                  Repositories
                </Button>
                <Button className={activePanel === 'developers' ? "" : "Global__button-black"}
                        onClick={() => setActivePanel('developers')}>
                  Developers
                </Button>
              </ButtonGroup>
            </div>

            <div className="HomePage__select-container">
              <div>
                <label>Spoken language: </label>
                <select>
                  <option value="">Any</option>
                  <option value="option">option</option>
                  <option value="option">option</option>
                  <option value="option">option</option>
                  <option value="option">option</option>
                </select>
              </div>

              <div>
                <label>Language: </label>
                <select>
                  <option value="">Any</option>
                  <option value="option">option</option>
                  <option value="option">option</option>
                  <option value="option">option</option>
                  <option value="option">option</option>
                </select>
              </div>

              <div>
                <label>Date range: </label>
                <select>
                  <option value="">Today</option>
                  <option value="option">option</option>
                  <option value="option">option</option>
                  <option value="option">option</option>
                  <option value="option">option</option>
                </select>
              </div>
            </div>
          </div>

          {repositories.length > 0 &&
          repositories.map((item, index) => (
            <div className="HomePage__rep-box" key={index}>
              <div>
                <TurnedInIcon className="Global__icon-fix" />
                <Link className="Global__link" href={item.url} target="_blank" color="primary">
                  {item.username} / {item.repositoryName}
                </Link>
                <div className="HomePage__rep-desc">{item.description}</div>
                <div className="HomePage__rep-meta">
                  <div>{item.language ? item.language : 'NA'}</div>
                  <div><StarOutlineIcon className="Global__icon-fix" /> {item.totalStars}</div>
                  <div><DeviceHubIcon className="Global__icon-fix" /> {item.forks}</div>
                  <div className="HomePage__rep-avatars">
                    Build by &nbsp;
                    {item.builtBy.map((item, index) => (
                      <div key={index}>
                        <Tooltip title={item.username}>
                          <Link href={item.url} target="_blank">
                            <img className="HomePage__rep-avatar" src={item.avatar} />
                          </Link>
                        </Tooltip>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="HomePage__rep-right">
                <div>
                  <Button size="medium" className="Global__button-black" variant="contained" color="secondary">
                    <StarOutlineIcon fontSize="small" /> Star
                  </Button>
                </div>
                <div>
                  <StarOutlineIcon className="Global__icon-fix" /> {item.starsSince} stars today
                </div>
              </div>
            </div>
          ))
          }
        </div>
      </>
      }
      {activePanel === 'developers' &&
      <>
        <div className="Global__meta">
          <h1>Trending</h1>
          <h3>These are the developers building the hot tools today.</h3>
        </div>

        <div className="HomePage__divider"></div>

        <div className="HomePage__container">
          <div className="HomePage__container-head">
            <div>
              <ButtonGroup variant="contained" color="primary" aria-label="Select repositores or developers">
                <Button className={activePanel === 'repositories' ? "" : "Global__button-black"}
                        onClick={() => setActivePanel('repositories')}>
                  Repositories
                </Button>
                <Button className={activePanel === 'developers' ? "" : "Global__button-black"}
                        onClick={() => setActivePanel('developers')}>
                  Developers
                </Button>
              </ButtonGroup>
            </div>

            <div className="HomePage__select-container">
              <div>
                <label>Language: </label>
                <select>
                  <option value="">Any</option>
                  <option value="option">option</option>
                  <option value="option">option</option>
                  <option value="option">option</option>
                  <option value="option">option</option>
                </select>
              </div>

              <div>
                <label>Date range: </label>
                <select>
                  <option value="">Today</option>
                  <option value="option">option</option>
                  <option value="option">option</option>
                  <option value="option">option</option>
                  <option value="option">option</option>
                </select>
              </div>
            </div>
          </div>

          {developers.length > 0 &&
          developers.map((item, index) => (
            <div className="HomePage__dev-box" key={index}>
              <div className="HomePage__dev-first">
                <div className="HomePage__dev-rank">{item.rank}</div>
                <div>
                  <img className="HomePage__dev-avatar" src={item.avatar} />
                </div>
                <div>
                  <Link className="Global__link" href="#" target="_blank" color="primary">
                    {item.name}
                  </Link>
                  <div className="HomePage__dev-username">
                    {item.username}
                  </div>
                </div>
                </div>
              <div className="HomePage__dev-second">
                <WhatshotIcon className="Global__icon-fix HomePage__dev-fire" /> POPULAR REPO <br/>
                <TurnedInIcon className="Global__icon-fix" />&nbsp;
                <Link className="Global__bold" href={item.popularRepository.url} target="_blank">
                  {item.popularRepository.repositoryName}
                </Link>
                <div>{item.popularRepository.description}</div>
              </div>
              <div>
                <Button size="medium" onClick={preventDefault} className="Global__button-black" variant="contained" color="black">
                  Follow
                </Button>
              </div>
            </div>
          ))
          }
        </div>
      </>
      }
    </>
  )
}