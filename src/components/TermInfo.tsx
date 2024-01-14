import { User, WebsiteName, Wrapper } from "./styles/TerminalInfo.styled";

const TermInfo = () => {
  return (
    <Wrapper>
      <User>visitor</User>@<WebsiteName>cli.hamismad.com</WebsiteName>:~$
    </Wrapper>
  );
};

export default TermInfo;
