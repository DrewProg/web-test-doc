const sequelize = require('../config/db.config');
const { DataTypes } = require('sequelize');

const Post = sequelize.define('post', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.TEXT, allowNull: false },
    role: { type: DataTypes.TEXT, defaultValue: "USER" }
});

const User_Post = sequelize.define('user_post', {});

const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nickname: { type: DataTypes.TEXT, unique: true, allowNull: false },
    surname: { type: DataTypes.TEXT },
    name: { type: DataTypes.TEXT },
    patronimyc: { type: DataTypes.TEXT },
    pass_hash: { type: DataTypes.TEXT, allowNull: false }
});

const User_Project = sequelize.define('user_project', {});

const Project = sequelize.define('project', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.TEXT, allowNull: false },
    description: { type: DataTypes.TEXT }
});

const DocSet = sequelize.define('doc_set', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.TEXT, unique: true, allowNull: false },
    description: { type: DataTypes.TEXT }
});

const DocType = sequelize.define('doc_type', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.TEXT, unique: true, allowNull: false },
    description: { type: DataTypes.TEXT }
});

const Set_Attribute = sequelize.define('set_attribute', {});

const Type_Attribute = sequelize.define('type_attribute', {});

const Attribute = sequelize.define('attribute', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.TEXT, allowNull: false },
    description: { type: DataTypes.TEXT },
    input_type: { type: DataTypes.JSON, allowNull: false },
});

const Document = sequelize.define('document', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
});

const AttributeValue = sequelize.define('attribute_value', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    value: { type: DataTypes.JSON },
});

const LifeCycle = sequelize.define('life_cycle', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.TEXT, allowNull: false },
    description: { type: DataTypes.TEXT }
})

const LifeCycleStatus = sequelize.define('life_cycle_status', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    prestatus_ids: { type: DataTypes.TEXT, allowNull: false },
    description: { type: DataTypes.TEXT }
})

const Status_Doc = sequelize.define('status_doc', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})

const User_Status = sequelize.define('user_status', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})

const StatusHistory = sequelize.define('status_history', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    description: { type: DataTypes.TEXT }
}, {
    timestamps: true,
    createdAt: true,
    updatedAt: false
})

Post.hasMany(User_Post);
User_Post.belongsTo(Post);

User.hasMany(User_Post);
User_Post.belongsTo(User);

User.hasMany(User_Project);
User_Project.belongsTo(User);

Project.hasMany(User_Project);
User_Project.belongsTo(Project);

Project.hasMany(DocSet);
DocSet.belongsTo(Project);

DocSet.hasMany(Document);
Document.belongsTo(DocSet);

DocSet.hasMany(Set_Attribute);
Set_Attribute.belongsTo(DocSet);

Document.hasMany(AttributeValue);
AttributeValue.belongsTo(Document);

DocType.hasMany(DocSet);
DocSet.belongsTo(DocType);

DocType.hasMany(Type_Attribute);
Type_Attribute.belongsTo(DocType);

Attribute.hasMany(Type_Attribute);
Type_Attribute.belongsTo(Attribute);

Attribute.hasMany(Set_Attribute);
Set_Attribute.belongsTo(Attribute);

Attribute.hasMany(AttributeValue);
AttributeValue.belongsTo(Attribute);

LifeCycle.hasMany(DocSet);
DocSet.belongsTo(LifeCycle);

LifeCycle.hasMany(LifeCycleStatus);
LifeCycleStatus.belongsTo(LifeCycle);

LifeCycleStatus.hasMany(Status_Doc);
Status_Doc.belongsTo(LifeCycleStatus);

LifeCycleStatus.hasMany(StatusHistory);
StatusHistory.belongsTo(LifeCycleStatus);

User.hasMany(User_Status);
User_Status.belongsTo(User);

Status_Doc.hasMany(User_Status);
User_Status.belongsTo(Status_Doc);

Status_Doc.hasOne(Document);
Document.belongsTo(Status_Doc);


module.exports = {
    Post,
    User,
    User_Post,
    User_Project,
    Project,
    DocSet,
    DocType,
    Set_Attribute,
    Type_Attribute,
    Attribute,
    Document,
    AttributeValue,
    LifeCycle,
    LifeCycleStatus,
    Status_Doc,
    User_Status,
    StatusHistory
}