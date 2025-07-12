import json
import csv
import pickle

def load_csv_to_dict(csv_path):
    result = {}
    with open(csv_path, newline='') as csvfile:
        reader = csv.reader(csvfile)
        for row in reader:
            if len(row) < 2:
                continue
            result[row[0]] = row[1]
    return result

def save_dict_pickle(dictionary, output_path):
    with open(output_path, 'wb') as f:
        pickle.dump(dictionary, f)

def load_dict_pickle(pickle_path):
    with open(pickle_path, 'rb') as f:
        return pickle.load(f)


def load_and_merge_json(json_path):
    with open(json_path, 'r') as f:
        data = json.load(f)

    if not isinstance(data, list):
        raise ValueError("Expected a list of dictionaries in the JSON file.")

    merged_dict = {}
    for d in data:
        if not isinstance(d, dict):
            raise ValueError("All elements in the list must be dictionaries.")
        merged_dict.update(d)

    return merged_dict



mapper_path = './data/sketchfab_map_dictionary.json'
caption_path = './data/caption_map_dictionary.json'
fitting_path = './data'

mapping = load_dict_pickle(mapper_path)
caption_mapping = load_dict_pickle(caption_path)

objs = [
    '1871/9349845',
    '1871/9349847',
    '1871/9349851',
    '1871/9349864',
    '1871/9349869',
    '1871/9349870',
    '1871/9349872',
    '1871/9349885',
    '1871/9349887',
    '1871/9349891',


    # '1871/9350264',
    # '1871/9350266',
    # '1871/9350269',
    # '1871/9350272',
    # '1871/9350285',
    # '1871/9350287',
    # '1871/9350288',
    # '1871/9350291',
    # '1871/9350293',
    # '1871/9350301',
    # '1871/9350303',
    # '1871/9350315',

    # '1871/9351397',
    # '1871/9351398',
    # '1871/9351401',
    # '1871/9351403',
    # '1871/9351417',
    # '1871/9351418',
    # '1871/9351420',


    # '1871/9352738',
    # '1871/9352754',
    # '1871/9352756',
    # '1871/9352761',
    # '1871/9352763',
    # '1871/9352774',
    # '1871/9352775',
    # '1871/9352777',


    # '1871/9353403',
    # '1871/9353415',
    # '1871/9353417',
    # '1871/9353418',
    # '1871/9353420',
    # '1871/9353422',
    # '1871/9353434',

    # 'data/9584138',
    # 'data/9585727',
    # 'data/9585750',
    # 'data/9585791',
    # 'data/9585798',
    # 'data/9586352',
    # 'data/9586359',
    # 'data/9586426',
    # 'data/9586907',
    # 'data/9586912',
    # 'data/9586980',
    # 'data/9587013',
    # 'data/9587064',
    # 'data/9587169',
    # 'data/9587187',
    # 'data/9587465',
    # 'data/9587534',
    # 'data/9588028',
    # 'data/9588101',
    # 'data/9588580',
    ] # UPDATE THIS LIST


for obj in objs:
    uid = mapping[obj + '.tar.gz'].split('-')[-1]
    print('Path:', obj, 'Captions:', caption_mapping[uid])