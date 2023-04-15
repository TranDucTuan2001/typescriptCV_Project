import { Request, Response } from 'express';
import Education from '../models/education';
import Profile from '../models/profile';
import Experience from '../models/experience';
import Skill from '../models/skill';
// experiences là đặt tên kiểu nào dữ liệu bên index như vậy
// ex:   name:profile -> <%= name.name %> ,<%= name.job %> ....
// render là index file giao diện
class Home {
    async index(req: Request, res: Response) {
        const education = await Education.findOne();
        const profile = await Profile.findOne();
        const experience = await Experience.find();
        const skill = await Skill.find();

        res.render('index', {
            profile: profile,
            education: education,
            experiences: experience,
            skills: skill

        });
    }
}
export default new Home();