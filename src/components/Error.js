import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log("error", error);
  return (
    <div className="error">
      <h1>
        {error?.status} - {error?.statusText}
      </h1>
      <p>{error?.error?.message}</p>
    </div>
  );
};

export default Error;
