import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Heading,
  Text,
  Flex,
} from "@chakra-ui/react";

function DishCard({
  title,
  price,
  summary,
  image,
  altText,
  footerText = "Order a delivery",
}) {
  return (
    <Card variant="filled" maxW="xs" overflow="hidden">
      <Image src={image} alt={altText} className="image-ratio" />
      <CardHeader pb={2.5}>
        <Flex align="center" justify="space-between">
          <Heading fontSize="1.5rem" fontFamily="karla">
            {title}
          </Heading>
          <Text fontSize="1.3375rem" color="brandPeach.500">
            {price}
          </Text>
        </Flex>
      </CardHeader>
      <CardBody>
        <Text color="brandGray.700" fontSize="1.125rem">
          {summary}
        </Text>
      </CardBody>
      <CardFooter color="gray.800" fontSize="1.25rem" pt={2.5}>
        {footerText}
      </CardFooter>
    </Card>
  );
}

export default DishCard;
