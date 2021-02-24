/*命名空间*/
namespace ShuaiGe{
    export class Dehua{
        name = '刘德华'
        talk(){
            console.log('我是帅哥刘德华')
        }
    }
}

namespace Bajie{
    export class Dehua{
        name = '马德华'
        talk(){
            console.log('我是八戒马德华')
        }
    }
}

export {ShuaiGe, Bajie}