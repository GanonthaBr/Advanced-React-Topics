/**
 * The function `WithListLoading` is a higher-order component that takes a component as an argument and
 * returns a new component that displays a loading message if the `isLoading` prop is true.
 * @param Component - The Component parameter is a React component that will be rendered if the
 * isLoading prop is false.
 * @returns The function `WithListLoading` returns a higher-order component (HOC) function.
 */
function WithListLoading(Component) {
  return function WihLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return (
      <p style={{ textAlign: "center", fontSize: "30px" }}>
        Hold on, fetching data may take some time :)
      </p>
    );
  };
}
export default WithListLoading;
