import { BrowserRouter as Router, Routes, Navigate } from "react-router-dom";

export const AppRouter = ({ contexts, children }) => {
  return (
    <Router>
      {contexts.reduce((current, Next) => {
        return (<Next>
          {current}
        </Next>)
      }, < Routes children={children} />)}
    </Router>
  );
}
export const Restrict = ({ children, guards }) => {
  for (const guard of guards) {
    const result = guard();
    console.log(result)
    if (result !== true) {
      console.log('ssss')
      return (<Navigate to={result} replace />);
    }
  }
  return (<>{children}</>);
}