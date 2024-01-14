import {
  Cmd,
  HeroContainer,
  Link,
  PreImg,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
          {`
    __  __                                    __
   / / / /___ _____ ___  ____ ___  ____ _____/ /
  / /_/ / __ \`/ __ \`__ \\/ __ \`__ \\/ __ \`/ __  /
 / __  / /_/ / / / / / / / / / / / /_/ / /_/ /
/_/ /_/\\__,_/_/ /_/ /_/_/ /_/ /_/\\__,_/\\__,_/
    __  ___      __    _           __    ___
   /  |/  /___  / /_  (_)_  ______/ /___/ (_)___
  / /|_/ / __ \\/ __ \\/ / / / / __  / __  / / __ \\
 / /  / / /_/ / / / / / /_/ / /_/ / /_/ / / / / /
/_/  /_/\\____/_/ /_/_/\\__,_/\\__,_/\\__,_/_/_/ /_/
          `}
        </PreName>
        <PreWrapper>
          <PreNameMobile>
            {`
    __  __                                    __
   / / / /___ _____ ___  ____ ___  ____ _____/ /
  / /_/ / __ \`/ __ \`__ \\/ __ \`__ \\/ __ \`/ __  /
 / __  / /_/ / / / / / / / / / / / /_/ / /_/ /
/_/ /_/\\__,_/_/ /_/ /_/_/ /_/ /_/\\__,_/\\__,_/
    __  ___      __    _           __    ___
   /  |/  /___  / /_  (_)_  ______/ /___/ (_)___
  / /|_/ / __ \\/ __ \\/ / / / / __  / __  / / __ \\
 / /  / / /_/ / / / / / /_/ / /_/ / /_/ / / / / /
/_/  /_/\\____/_/ /_/_/\\__,_/\\__,_/\\__,_/_/_/ /_/
          `}
          </PreNameMobile>
        </PreWrapper>
        <div>
          👋 Hi! My name is Hammad Mohiuddin. Welcome to my CLI portfolio.
          (Version 1.0.0)
        </div>
        <Seperator>----</Seperator>
        <div>
          This project's source code can be found{" "}
          <Link
            href="https://github.com/hammad-mohi/cli-portfolio"
            target="_blank"
            rel="noreferrer noopener"
          >
            here
          </Link>
          . You can also type <Cmd>repo</Cmd> to take you there.
        </div>
        <Seperator>----</Seperator>
        <div>
          For a list of available commands, type `<Cmd>help</Cmd>` and press{" "}
          <Cmd>Enter</Cmd>.
        </div>
      </div>
      <div className="illu-section">
        <PreImg>
          {`

         `}
        </PreImg>
      </div>
    </HeroContainer>
  );
};

export default Welcome;
