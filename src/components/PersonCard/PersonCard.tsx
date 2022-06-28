import { CastMember, CrewMember } from "@/types/movie/rawTypes";
import { FC } from "react";

import Image from "../Image/Image";

import s from "./PersonCard.module.css";

interface PersonCardProps {
  info: CastMember & CrewMember;
}

const PersonCard: FC<PersonCardProps> = (props) => {
  const { info } = props;
  const { profile_path, name, character } = info;

  return (
    <article className={s.PersonCard}>
      <div className={s.PersonInner}>
        <div className={s.PersonImage}>
          <Image path={profile_path} alt={name} type="profile" />
        </div>
        <h3 className={s.PersonName}>{name}</h3>
        <p className={s.PersonSubtitle}>{character}</p>
      </div>
    </article>
  );
};

export default PersonCard;
