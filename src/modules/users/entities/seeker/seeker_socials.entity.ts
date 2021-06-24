import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Table,
  Model,
} from 'sequelize-typescript';
import { SeekerAccount } from './seeker_account.entity';

@Table({ tableName: 'seeker_socials' })
export class SeekerSocials extends Model {
  @Column({
    type: DataType.STRING,
  })
  skype: string;

  @Column({
    type: DataType.STRING,
  })
  linkedin: string;

  @Column({
    type: DataType.STRING,
  })
  instagram: string;

  @Column({
    type: DataType.STRING,
  })
  telegram: string;

  @Column({
    type: DataType.STRING,
  })
  twitter: string;

  @Column({
    type: DataType.STRING,
  })
  youtube: string;

  @Column({
    type: DataType.STRING,
  })
  behance: string;

  @Column({
    type: DataType.STRING,
  })
  artstation: string;

  @ForeignKey(() => SeekerAccount)
  @Column({ type: DataType.INTEGER })
  seeker_id: number;

  @BelongsTo(() => SeekerAccount)
  seeker_account: SeekerAccount;
}
