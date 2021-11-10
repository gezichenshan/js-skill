Remove duplicate object in an array.
// You have an array:
// var arr = [{id:1,name:'a',updatedDate:"2021-11-10T00:00:00Z"}, {id:1,name:'a',updatedDate:"2021-11-10T21:25:31Z}, {id:2,name:'b',updatedDate:"2021-11-10T15:25:31Z}]
// and you want to filter the object in the array which two has same id.
         [].filter(
            (
              s => (o: any) =>
                (k => !s.has(k) && s.add(k))(['id'].map(k => o[k]).join('|'))
            )(new Set()),
          );
1. The filter accecpt an IIFE function with a new Set() as a paramter and return a new function 
  (o: any) =>(k => !s.has(k) && s.add(k))(['id'].map(k => o[k]).join('|')).
2. The new function's body is also a IIFE functoin with ['id'].map(k => o[k]).join('|') as a paramter and.
   and by the code we know it is the value of id.
3. k => !s.has(k) && s.add(k) means if the set has no key then it will return TRUE and add the key into the set. If it has the key, it will return FALSE,
   and the value will be filtered out.
          
          
