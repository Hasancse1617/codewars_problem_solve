// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
function PaginationHelper(collection, itemsPerPage){
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
}
  
  // returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function() {
    return this.collection.length;
}
  
  // returns the number of pages
PaginationHelper.prototype.pageCount = function() {
   return Math.ceil(this.itemCount() / this.itemsPerPage);
}
  
  // returns the number of items on the current page. page_index is zero based.
  // this method should return -1 for pageIndex values that are out of range
  PaginationHelper.prototype.pageItemCount = function(pageIndex) {
    if(pageIndex < 0 || pageIndex > this.pageCount() - 1){
      return -1;
    }else if(pageIndex >= 0 && pageIndex != this.pageCount() - 1){
      return this.itemsPerPage;
    }else{
      return this.itemCount() - (pageIndex*this.itemsPerPage)
    }
  }
  
  // determines what page an item is on. Zero based indexes
  // this method should return -1 for itemIndex values that are out of range
  PaginationHelper.prototype.pageIndex = function(itemIndex) {
    if(itemIndex <0 || this.itemCount() == 0 || itemIndex > this.itemCount()){
      return -1;
    }
    return (Math.ceil((itemIndex+1) / this.itemsPerPage))-1;
  }
  
  var helper = new PaginationHelper([], 4);
  
  console.log(helper.pageCount());
  console.log(helper.pageIndex(0));