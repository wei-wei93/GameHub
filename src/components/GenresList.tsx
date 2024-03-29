import { HStack, Heading, Image, Link, List } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import { imageCropper } from "../services/image-cropper";

interface Props {
  selectedGenre: Genre | null;
  onSelectGenre: (genre: Genre) => void;
}

const GenresList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data: genres, error } = useGenres(); //rename data to genres

  if (error) return null;

  return (
    <>
      <Heading fontSize="2xl" marginBlock='10px' marginLeft='10px'>
        Genres
      </Heading>
      <List spacing="10px" marginTop="20px" marginLeft="10px">
        {genres.map((genre) => (
          <HStack key={genre.id}>
            <Image
              key={genre.image_background}
              borderRadius={8}
              objectFit="cover"
              src={imageCropper(genre.image_background)}
              boxSize="32px"
            />
            <Link
              as={genre.id === selectedGenre?.id ? "b" : "a"}
              onClick={() => onSelectGenre(genre)}
              fontSize="lg"
              key={genre.id}
            >
              {genre.name}
            </Link>
          </HStack>
        ))}
      </List>
    </>
  );
};

export default GenresList;
