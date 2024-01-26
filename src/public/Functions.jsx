import {Header} from "../componentes/Header"
import {TaskList} from "../componentes/TaskList"
import {Task} from "../componentes/Task"

const HookPersonalizado = () => {




    return (<>
        <Header className='Header' />
        <TaskList className='TaskList' tasks={Task} />
    </>)

}

export default HookPersonalizado