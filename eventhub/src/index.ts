class EventHub{
  private cache={};
  on(eventName:string,fn:(data:unknown)=>void){
    this.cache[eventName]=this.cache[eventName] || []
    this.cache[eventName].push(fn)   
  }
  emit(eventName: string, data?: unknown){
    const array=this.cache[eventName] || [];
    array.forEach(fn=>fn(data)); 
  }
  off(eventName: string, fn: (data: unknown)=>void){
    let index=indexOf(this.cache[eventName],fn)
    if(index==-1) return;
    this.cache[eventName].splice(index,1)
  } 
}

export default EventHub;



/**
 * 帮助函数 indexOf
 * @param array
 * @param item
 */
function indexOf(array,item){
  if(array==undefined) return -1;
  let index;
  for(let i=0;i<array.length;i++){
     if(array[i]==item){
        index=i;
       break;
     }
    return index;  
  }
   
}