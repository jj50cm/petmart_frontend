import { Badge } from "@chakra-ui/react";

const AlertStatus = ({ status, messages }) => {
   const {trueMess, falseMess} = messages
   return (
      <Badge variant="subtle" colorScheme={status ? "green" : "red"}>
         {status ?  trueMess: falseMess }
      </Badge>
   );
};

export default AlertStatus;
