import styled from "styled-components";

export const EduIntro = styled.div`
  margin-bottom: 0.75rem;
`;

export const EduList = styled.div`
  margin-bottom: 1rem;
  margin-left: 1rem;

  .title {
    font-weight: 700;
    margin-bottom: 0.275rem;
    color: ${({ theme }) => theme.colors?.primary};
  }

  .desc {
    color: ${({ theme }) => theme.colors?.secondary};
    margin-bottom: 0.2rem;
  }

  .desc > a {
    color: inherit;
    text-decoration: inherit;
  }

  .loc {
    font-style: italic;
    color: ${({ theme }) => theme.colors?.text[100]};
    margin-bottom: 0.2rem;
  }

  .dates {
    color: ${({ theme }) => theme.colors?.text[200]};
    margin-bottom: 0.2rem;
  }
`;
