import { nanoid } from "@reduxjs/toolkit";
import { List, ListItem } from "../../../common/List/styled";
import { MarkerPic } from "../../../common/List/styled";

export const Skills = ({ list }) => (
    <List>
        {list.map((skill, index) =>
            <ListItem key={index}>
                <MarkerPic />
                {skill}
            </ListItem>)}
    </List>
);