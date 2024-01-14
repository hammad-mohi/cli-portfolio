import { User, WebsiteName, Wrapper } from "./styles/TerminalInfo.styled";

const TermInfo = () => {
  return (
    <Wrapper>
      <User>visitor</User>@<WebsiteName>hammad-mohi.github.io</WebsiteName>:~$
    </Wrapper>
  );
};

export default TermInfo;
