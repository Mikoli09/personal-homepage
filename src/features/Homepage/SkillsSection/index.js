import { List, ListItem } from "../../../common/List/styled";
import { MarkerPic } from "../../../common/List/styled";

export const Skills = ({ list }) => (
    <List>
        {
            list.map((skill) =>
                <ListItem>
                    <MarkerPic />
                    {skill}
                </ListItem>)
        }
    </List>
);