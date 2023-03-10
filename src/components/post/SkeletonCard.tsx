import styled from "styled-components";

export const SkeletonCard = () => {
  const skeletonArray = Array.from({ length: 10 }, (_, index) => index);

  return (
    <>
      {skeletonArray.map((item, index) => (
        <Container key={index}>
          <ImageBox />
          <ContentBody>
            <SkeletonDescription />
            <SkeletonDescription />
            <SkeletonDate />
          </ContentBody>
        </Container>
      ))}
    </>
  );
};

const Container = styled.li`
  margin: 0 auto;
  margin-top: 15px;
  margin-bottom: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 90vw;
  height: 150px;
  box-shadow: 1px 1px 4px 1px #444444;
  @keyframes skeleton {
    from {
      filter: brightness(1);
    }

    50% {
      filter: brightness(200%);
    }
    to {
      filter: brightness(1);
    }
  }
`;

const ImageBox = styled.div`
  width: 150px;
  height: 150px;
  background: #383838;
  filter: brightness(1);
  animation: skeleton 1s infinite;
`;

const ContentBody = styled.div`
  margin-left: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-end;
  width: 50vw;
  height: 100px;
`;

const SkeletonDescription = styled.p`
  width: 50vw;
  height: 20px;
  font-weight: bold;
  background: #383838;
  filter: brightness(1);
  animation: skeleton 1s infinite;
`;
const SkeletonDate = styled.span`
  text-align: right;
  font-size: 0.8rem;
  width: 10vw;
  height: 20px;
  background: #383838;
  filter: brightness(1);
  animation: skeleton 1s infinite;
`;
