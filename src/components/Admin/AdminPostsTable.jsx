import { ChatIcon, CheckIcon, CloseIcon } from "@chakra-ui/icons";
import {
   HStack,
   Table,
   TableContainer,
   Tbody,
   Td,
   Th,
   Thead,
   Tr,
   useToast,
} from "@chakra-ui/react";

import TooltipIcon from "./TooltipIcon";
import UserAccount from "./UserAccount";
import AlertStatus from "./AlertStatus";
import { useDispatch, useSelector } from "react-redux";
import { approveUserAccount } from "../../redux/actions/userActions";
import { useEffect } from "react";

const AdminPostTable = ({ tableHeader, posts }) => {
   const dispatch = useDispatch();
   
   const styleIcon = {
      cursor: "pointer",
      _hover: {
         color: "blue",
      },
   };
   return (
      <TableContainer>
         <Table variant="simple" size={"lg"}>
            <Thead>
               <Tr>
                  {tableHeader.map((title) => {
                     return <Th key={title}>{title}</Th>;
                  })}
               </Tr>
            </Thead>
            <Tbody>
               {posts &&
                  posts.map((post) => {
                     const {id,title,creator,address,isApproved,available,views, star } = post
                     return (
                        <Tr key={id}>
                           <Td>
                             
                              {title}
                           </Td>
                           <Td> <UserAccount
                                 name={creator.username}
                                 email={creator.email}
                              /></Td>
                           <Td>
                              {address}
                           </Td>
                           <Td>
                              <AlertStatus status={isApproved} messages={{
                                 trueMess: "Đã duyệt", falseMess: "Chưa duyệt"
                              }} />
                           </Td>
                           <Td>
                           <AlertStatus status={available} messages={{
                                 trueMess: "Còn", falseMess: "Hêt hạn"
                              }} />
                           </Td>
                           <Td>{views}</Td>
                           <Td>{star}</Td>

                           <Td>
                              <HStack spacing={6}>
                                 <TooltipIcon text={"Xác thực"}>
                                    <CheckIcon boxSize={5} sx={styleIcon}  />
                                 </TooltipIcon>
                                 <TooltipIcon text={"Hủy xác thực"}>
                                    <CloseIcon boxSize={4} sx={styleIcon} />
                                 </TooltipIcon>
                                 <TooltipIcon text={"Chat"}>
                                    <ChatIcon boxSize={5} sx={styleIcon} />
                                 </TooltipIcon>
                              </HStack>
                           </Td>
                        </Tr>
                     );
                  })}
            </Tbody>
         </Table>
      </TableContainer>
   );
};

export default AdminPostTable;
