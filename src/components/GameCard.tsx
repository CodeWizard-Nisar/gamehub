// import React from "react";
// import { Game } from "../Hooks/useGames";
// import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
// import PlatformIconList from "./PlatformIconList";
// import CriticScore from "./CriticScore";
// import getCroppedImageUrl from "../services/image-url";
// import Emogi from "./Emoji";

// interface Props {
//   game: Game;
// }
// const GameCard = ({ game }: Props) => {
//   return (
//     <Card>
//       <Image src={getCroppedImageUrl(game.background_image)} />
//       <CardBody>
//         <HStack justifyContent="space-between" marginBottom={3}>
//           <PlatformIconList
//             platforms={game.parent_platforms.map((p) => p.platform)}
//           />
//           <CriticScore score={game.metacritic}></CriticScore>
//         </HStack>
//         <Heading fontSize={"2xl"}>
//           {game.name} <Emogi rating={game.rating_top}></Emogi>
//         </Heading>
//       </CardBody>
//     </Card>
//   );
// };

// export default GameCard;
import { Text } from "@chakra-ui/react";
import React from "react";

const GameCard = () => {
  return (
    <Text display="center" fontSize="50xl">
      I Love you
    </Text>
  );
};

export default GameCard;
