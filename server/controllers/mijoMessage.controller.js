import MijoMessage from '../models/mijoMessage/mijoMessage.model';

function load(params) {
  return MijoMessage.get(params.id);
}

function get(req, res) {
  return res.json(req.mijoMessage);
}

function create(req, res) {
  const mijoMessage = new MijoMessage({
    question: {
      title: 'testtitle',
      questionType: {
        multipleChoice: ['Yes', 'No'],
      }
    },
  });
  return mijoMessage.save().then((mijoMessage) => res.json(mijoMessage));
}

function update(params) {
  return load(params).then(mijoMessage => {
    const tmp = mijoMessage;
    mijoMessage.title = params.data.title;
    mijoMessage.content = params.data.content;
    return mijoMessage.save()
  });
}

function list(params) {
  const { limit = 50, skip = 0 } = params;
  return MijoMessage.list({ limit, skip })
}

function remove(params) {
  return load(params).then(mijoMessage => mijoMessage.remove());
}

export default { load, get, create, update, list, remove };
