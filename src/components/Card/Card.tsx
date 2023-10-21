import cardStyles from "./Card.module.css";

const CardHeader = ({ children }: any) => {
  return (
    <>
      <div>{children}</div>
      <hr style={{ marginTop: "10px", marginBottom: "15px" }} />
    </>
  );
};

const CardTitle = ({ children }: any) => {
  return (
    <>
      <span className={cardStyles.cardTitle}>{children.toUpperCase()}</span>
    </>
  );
};

function CardBody({ children }: any) {
  return (
    <>
      <div>{children}</div>
    </>
  );
}

function CardFooter({ children }: any) {
  return (
    <>
      <hr style={{ marginTop: "10px", marginBottom: "15px" }} />
      <div>{children}</div>
    </>
  );
}

function Card({ children }: any) {
  return (
    <>
      <div className={cardStyles.card}>{children}</div>
    </>
  );
}

export { Card, CardBody, CardFooter, CardHeader, CardTitle };
