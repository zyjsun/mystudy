interface Foo{
    type:'foo'
}
interface Bar{
    type:'bar'
}
type All=Foo|Bar;


function handleValue(val: All){
    //ts为js超群
    switch(val.type){
        case'foo':
        break;
        case 'bar':
            break; 
        default:
    }
}