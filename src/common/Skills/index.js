import { List, ListItem } from "../List/styled";
import { MarkerPic } from "../List/styled";

export const Skills = ({ list }) => (
    <List>
        {list.map((skill, index) =>
            <ListItem key={index}>
                <MarkerPic />
                {skill}
            </ListItem>
        )}
    </List>
);