import styled from "styled-components";

export const WorkIntro = styled.div`
  margin-bottom: 0.75rem;
`;

export const WorkList = styled.div`
  margin-bottom: 1rem;
  margin-left: 1rem;

  .title {
    font-weight: 700;
    margin-bottom: 0.275rem;
    color: ${({ theme }) => theme.colors?.primary};
  }

  .desc {
    color: ${({ theme }) => theme.colors?.secondary};
  }

  .desc > a {
    color: inherit;
    text-decoration: inherit;
  }

  .loc {
    font-style: italic;
    color: ${({ theme }) => theme.colors?.text[100]};
  }

  .dates {
    color: ${({ theme }) => theme.colors?.text[200]};
  }
`;
