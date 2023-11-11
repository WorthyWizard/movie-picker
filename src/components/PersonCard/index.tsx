import { CastMember, CrewMember } from "@/types/movie/data";

import { Image } from "../Image";

import s from "./styles.module.css";

interface Props {
  info: CastMember & CrewMember;
}

export const PersonCard = (props: Props) => {
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
