import cardStyles from "./Card.module.css";

const CardHeader = ({ children }: any) => {
  return (
    <>
      <div>{children}</div>
    </>
  );
};

const CardTitle = ({ children }: any) => {
  return (
    <>
      <span className={cardStyles.cardTitle}>{children.toUpperCase()}</span>
      <hr style={{ marginTop: "10px", marginBottom: "15px" }} />
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
