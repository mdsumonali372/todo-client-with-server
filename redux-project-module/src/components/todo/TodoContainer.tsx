import { useState } from "react";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { useGetTodosQuery } from "@/redux/api/api";

const TodoContainer = () => {
  const [priority, setPriority] = useState("");
  // from local store
  // const { todos } = useAppSelector((state) => state.todos);

  // from server
  const { data: todos, isLoading } = useGetTodosQuery(priority);
  console.log(todos);
  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <div className="flex justify-between mb-3">
        <AddTodoModal />
        <TodoFilter priority={priority} setPriority={setPriority} />
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl p-[5px]">
        {/* <div className="bg-white flex justify-center items-center font-bold p-3 rounded-md">
          <p>There is no task pending</p>
        </div> */}
        <div className="bg-white p-5 w-full h-full rounded-lg space-y-3">
          {todos?.data?.map((item) => (
            <TodoCard key={item._id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
