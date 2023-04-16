import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Text } from "@chakra-ui/react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
   const isFirstPage = currentPage === 1;
   const isLastPage = currentPage === totalPages;
   const pagesToShow = 5; // Number of pages to show in the pagination bar
   const pagesArray = Array.from({ length: totalPages }, (_, i) => i + 1);
   let startPage, endPage;

   if (totalPages <= pagesToShow) {
      startPage = 1;
      endPage = totalPages;
   } else {
      const halfPagesToShow = Math.floor(pagesToShow / 2);
      if (currentPage <= halfPagesToShow) {
         startPage = 1;
         endPage = pagesToShow;
      } else if (currentPage + halfPagesToShow >= totalPages) {
         startPage = totalPages - pagesToShow + 1;
         endPage = totalPages;
      } else {
         startPage = currentPage - halfPagesToShow;
         endPage = currentPage + halfPagesToShow;
      }
   }

   const pages = pagesArray.slice(startPage - 1, endPage);
   return (
      <Flex alignItems="center" justifyContent="center" my="6">
         <Box mr="4">
            <Text fontSize="sm">
               Page {currentPage} of {totalPages}
            </Text>
         </Box>
         <Box mr="4">
            <Button
               size="sm"
               variant="solid"
               colorScheme="blue"
               disabled={isFirstPage}
               onClick={() => onPageChange(currentPage - 1)}
               leftIcon={<ChevronLeftIcon />}
            >
               Previous
            </Button>
         </Box>
         {pages.map((page) => (
            <Box key={page} mr="4">
               <Button
                  size="sm"
                  variant={page === currentPage ? "solid" : "outline"}
                  colorScheme={page === currentPage ? "blue" : "gray"}
                  onClick={() => onPageChange(page)}
               >
                  {page}
               </Button>
            </Box>
         ))}
         <Box>
            <Button
               size="sm"
               variant="solid"
               colorScheme="blue"
               disabled={isLastPage}
               onClick={() => onPageChange(currentPage + 1)}
               rightIcon={<ChevronRightIcon />}
            >
               Next
            </Button>
         </Box>
      </Flex>
   );
};

export default Pagination;
