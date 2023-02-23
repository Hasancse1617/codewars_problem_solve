class SmallestIntegerFinder {
    findSmallestInt(args) {
      args=args.sort((x,y)=>x-y);
      return args[0];
    }
}