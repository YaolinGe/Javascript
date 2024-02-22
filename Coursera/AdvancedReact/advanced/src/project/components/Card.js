import { Heading, HStack, Image, Text, VStack} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack bg="white" borderRadius=".5rem" overflow="hidden" align="start" paddingBottom="1rem">
      <Image src={imageSrc} w="100%" borderRadius=".5rem"/>
      <Heading color="black" size="md" marginLeft="1rem">{title}</Heading>
      <Text color="gray" marginLeft="1rem">{description}</Text>
      <HStack marginLeft="1rem">
        <Text color="black">Learn More</Text>
        <FontAwesomeIcon icon={faArrowRight} color="black" size="1x"/>
      </HStack>
    </VStack>
  )
};

export default Card;
