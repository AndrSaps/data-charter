import base64
import kaggle.api
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import io


plt.rcParams["figure.figsize"] = (9, 6)


def update_data():
    kaggle.api.dataset_download_files("sudalairajkumar/novel-corona-virus-2019-dataset",
                                  path="E:\\andrii\\proj\\data-charter\\server\\services\\temp", unzip=True)

def confirmed_cases():
    conf = pd.read_csv("E:\\andrii\\proj\\data-charter\\server\\services\\temp\\time_series_covid_19_confirmed.csv")
    conf = conf.transpose()

    conf.columns = conf.iloc[1, :]
    conf = conf.drop(["Province/State", "Country/Region", "Lat", "Long"], axis=0)

    Confirmed = conf.loc[:, ["Ukraine", "Italy", "Germany", "Russia", "Spain"]]
    Confirmed["China"] = conf.loc[:, ["China"]].sum(axis=1)
    Confirmed["US"] = conf.loc[:, ["US"]].sum(axis=1)


    conf.transpose().iloc[:, -1].sort_values(ascending=False)

    ticks = Confirmed.index[np.arange(0, len(Confirmed), 50)]

    plt.plot(Confirmed)
    plt.xticks(ticks, rotation=45)
    plt.legend(Confirmed.columns, loc='upper left')
    return get_svg_image()


def get_svg_image():
    pic_io_bytes = io.BytesIO()
    plt.savefig(pic_io_bytes, format='svg')
    pic_io_bytes.seek(0)
    pic_hash = base64.b64encode(pic_io_bytes.read())
    return pic_hash

confirmed_cases()




