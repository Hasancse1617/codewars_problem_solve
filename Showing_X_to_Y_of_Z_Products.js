var paginationText = function(pageNumber, pageSize, totalProducts){
    let from=1, to=1;
   if(pageNumber==1){
     from = 1;
   }else{
     from = pageSize*(pageNumber-1)+1;
   }
   to = pageSize*pageNumber;
   if(to>totalProducts){
     to = totalProducts;
   }
   return `Showing ${from} to ${to} of ${totalProducts} Products.`;
 }
 console.log(paginationText(3,10,26));
 
 