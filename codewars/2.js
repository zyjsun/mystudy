    // likes[''] //must be  "no one likes this" length==0
    // likes["Peter"]//must be "Peter likes this"
    // likes["Jacob","Alex"]//must be Jacob and Alex likes this"
    // likes["Max","John","Mark"]//must be Max,John and Mark likes this"
    // likes["Alex","Jacob","Mark","Max"]//must be Max,John and Mark zzlikes this"

    const likes=names=>{
          switch(names.length){
              case 0:
                  return 'no one likes this'
              case 1:
                  return names[0]+'like this'
              case 2:
                  return names[0]+','+names[1]+'like this'
              case 3:
                  return names[0]+','+names[1]+','+names[2]+'like this'
              case 4:
                  return names[0]+','+names[1]+','+names[2]+','+names[3]+'like this'
          }
    }
    console.log(likes([]));
    console.log(likes(["Peter"]));
    console.log(likes(["Jacob","Alex"]));
    console.log(likes(["Max","John","Mark"]));
    console.log(likes(["Alex","Jacob","Mark","Max"]));