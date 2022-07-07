import { Reminder } from "../types/reminder";


interface ReminderListProps {
    items: Reminder[]
    onDeleteReminder: (id: number) => void;
}

const ReminderList = ({ items, onDeleteReminder }: ReminderListProps) => {
    return (
        <ul className="list-group">
            {items.map(item =>
                <li className="list-group-item" key={item.id}>
                    {item.title}
                    <button onClick={() => onDeleteReminder(item.id)} className="btn btn-outline-danger mx-5 rounded-pill" >Delete</button>
                </li>)}
        </ul>
    )
}

export default ReminderList;