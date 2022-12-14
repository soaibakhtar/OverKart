import { Input, InputGroup, InputRightAddon, InputRightElement } from '@chakra-ui/react'
import { BsSearch } from 'react-icons/bs';
import { VscAccount } from 'react-icons/vsc';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsCartPlus } from 'react-icons/bs';
import { ReactNode } from 'react';
import { Text } from '@chakra-ui/react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Links = ['Dashboard', 'Projects', 'Team'];

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box fontSize={50}>OverKart</Box>
            <HStack >
                <InputGroup size={"sm"}  alignItems={"center"} justifyContent="center">
                <Input focusBorderColor='none' _focus={"none"} size={"sm"}  width={1000} type="text" placeholder='Search... everything you find ships for free'  />
                <InputRightAddon size={"sm"} borderRadius={"0px 2px 2px 0px"} background={"red"}>
                <BsSearch cursor={"pointer"}/>
                </InputRightAddon>
                </InputGroup>
            </HStack>
          </HStack>
          <Flex alignItems={'center'} spacing={4}>
          <HStack spacing={6}>
          <VscAccount cursor={"pointer"} size={30}/>
            <AiOutlineHeart cursor={"pointer"} size={30}/>
            <BsCartPlus cursor={"pointer"} size={30}/>
          </HStack>
          </Flex>
        </Flex>
        <hr />
        <Flex h={10} alignItems={'center'} justifyContent={'space-between'}>
            <Text>Furniture</Text>
            <Text>Rugs</Text>
            <Text>Decor</Text>
            <Text>Bedding</Text>
            <Text>Home Improvement</Text>
            <Text>Kitchen</Text>
            <Text>Outdoor</Text>
            <Text>Lighting</Text>
            <Text>Kids & Baby</Text>
            <Text>Gifts</Text>
            <Text>More</Text>
            <Text>Holiday</Text>
            <Text>Sales & Deals</Text>
        </Flex>
      </Box>

      <Box p={4}>Main Content Here</Box>
    </>
  );
}