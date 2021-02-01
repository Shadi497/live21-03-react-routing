import { Button, ButtonsWrapper } from "./styles";
import { Redirect, Link, useParams } from "react-router-dom";

const InstructorProfile = ({ instructors }) => {
  const { instructorSlug } = useParams();
  const instructor = instructors.find(
    (instructor) => instructor.slug === instructorSlug
  );

  if (!instructor) return <Redirect exact to="/404" />;

  const { name, emoji, github, description } = instructor;

  const goToGitHub = () => window.open(`https://github.com/${github}`);

  return (
    <>
      <h1>{emoji}</h1>
      <h2>{name}</h2>
      <p>{description}</p>

      <ButtonsWrapper>
        <Link to={`/`}>
          <Button color="tomato" textColor="white">
            Go back home
          </Button>
        </Link>
        <Button onClick={goToGitHub}>Go to GitHub</Button>
      </ButtonsWrapper>
    </>
  );
};

export default InstructorProfile;
