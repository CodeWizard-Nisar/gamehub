import useGenres, { Genre } from "../Hooks/useGenres";

const GenresList = () => {
  const { data } = useGenres();
  return (
    <ul>
      {data.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};
//our component knows about the endpoint it should not happen..
export default GenresList;
